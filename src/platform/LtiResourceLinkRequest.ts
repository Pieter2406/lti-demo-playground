export type LtiMessageType = 'LtiResourceLinkRequest';
export type LtiVersion = '1.3.0';

/**
 * The required https://purl.imsglobal.org/spec/lti/claim/roles claim's value contains a (possibly empty)
 * array of URI values for roles that the user has within the message's associated context.
 *
 * If this list is not empty, it MUST contain at least one role from the role vocabularies described in Appendix A.2 Role vocabularies.
 *
 * If the sender of the message wants to include a role from another vocabulary namespace,
 * by best practice it should use a fully-qualified URI to identify the role. By best practice,
 * systems should not use roles from another role vocabulary, as this may limit interoperability.
 *
 */
export enum LtiRole {
	System_Administrator = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator',
	System_None = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#None',
	System_AccountAdmin = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#AccountAdmin',
	System_Creator = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#Creator',
	System_SysAdmin = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#SysAdmin',
	System_SysSupport = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#SysSupport',
	System_User = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#User',

	Institution_Administrator = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator',
	Institution_Faculty = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Faculty',
	Institution_Guest = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Guest',
	Institution_None = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#None',
	Institution_Other = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Other',
	Institution_Staff = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff',
	Institution_Student = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student',
	Institution_Alumni = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Alumni',
	Institution_Instructor = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor',
	Institution_Learner = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Learner',
	Institution_Member = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Member',
	Institution_Mentor = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Mentor',
	Institution_Observer = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Observer',
	Institution_ProspectiveStudent = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#ProspectiveStudent',

	Membership_Administrator = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator',
	Membership_ContentDeveloper = 'http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper',
	Membership_Instructor = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor',
	Membership_Learner = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Learner',
	Membership_Mentor = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor',
	Membership_Manager = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Manager',
	Membership_Member = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Member',
	Membership_Officer = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Officer',
}

/**
 * An array of URI values for context types. If present, the array MUST include at least one context type from the context type vocabulary
 * described in Appendix A.1 Context type vocabularies. If the sender of the message wants to include a context type from another vocabulary
 * namespace, by best practice it should use a fully-qualified URI. By best practice, systems should not use context types
 * from another role vocabulary, as this may limit interoperability.
 */
export enum LtiContextType {
	Course_Template = 'http://purl.imsglobal.org/vocab/lis/v2/course#CourseTemplate',
	Course_Offering = 'http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering',
	Course_Section = 'http://purl.imsglobal.org/vocab/lis/v2/course#CourseSection',
	Group = 'http://purl.imsglobal.org/vocab/lis/v2/course#Group',
}

/**
 * The optional https://purl.imsglobal.org/spec/lti/claim/context claim composes
 * properties for the context from within which the resource link launch occurs.
 */
export interface ILtiContext {
	/**
	 * Stable identifier that uniquely identifies the context from which the LTI message initiates.
	 * The context id MUST be locally unique to the deployement_id.
	 * It is recommended to also be locally unique to iss (Issuer).
	 * The value of id MUST NOT exceed 255 ASCII characters in length and is case-sensitive.
	 */
	id: string;
	/**
	 * An array of URI values for context types. If present, the array MUST include at least one
	 * context type from the context type vocabulary described in Appendix A.1 Context type vocabularies.
	 * If the sender of the message wants to include a context type from another vocabulary namespace,
	 * by best practice it should use a fully-qualified URI. By best practice, systems should not
	 * use context types from another role vocabulary, as this may limit interoperability.
	 */
	type?: LtiContextType[];
	/**
	 * Short descriptive name for the context. This often carries the "course code" for a course offering or course section context.
	 */
	label?: string;
	/**
	 * Full descriptive name for the context. This often carries the "course title" or "course name" for a course offering context.
	 */
	title?: string;
}

/**
 * The required https://purl.imsglobal.org/spec/lti/claim/resource_link claim
 * composes properties for the resource link from which the launch message occurs.
 */
export interface ILtiResourceLink {
	/**
	 * Opaque identifier for a placement of an LTI resource link within
	 * a context that MUST be a stable and locally unique to the deployment_id.
	 * This value MUST change if the link is copied or exported from one system or context and imported into another system or context.
	 * The value of id MUST NOT exceed 255 ASCII characters in length and is case-sensitive.
	 */
	id: string;
	/**
	 * Descriptive phrase for an LTI resource link placement.
	 */
	description?: string;
	/**
	 * Descriptive title for an LTI resource link placement.
	 */
	title?: string;
}

/**
 * The optional https://purl.imsglobal.org/spec/lti/claim/tool_platform claim composes properties associated with the platform instance initiating the launch.
 */
export interface ILtiToolPlatform {
	/**
	 * A stable locally unique to the iss identifier for an instance of the tool platform.
	 * The value of guid is a case-sensitive string that MUST NOT exceed 255 ASCII characters in length.
	 * The use of Universally Unique IDentifier (UUID) defined in [RFC4122] is recommended.
	 */
	guid: string;

	/**
	 * Administrative contact email for the platform instance.
	 */
	contact_email: string;

	/**
	 *  Descriptive phrase for the platform instance.
	 */
	description: string;

	/**
	 *  Name for the platform instance.
	 */
	name: string;

	/**
	 * Home HTTPS URL endpoint for the platform instance.
	 */

	url: string;

	/**
	 * Vendor product family code for the type of platform.
	 */
	product_family_code: string;

	/**
	 * Vendor product version for the platform.
	 */
	version: string;
}

/**
 * The optional https://purl.imsglobal.org/spec/lti/claim/launch_presentation claim composes properties
 * that describe aspects of how the message sender expects to host the presentation of the message receiver's user experience
 * (for example, the height and width of the viewport the message sender gives over to the message receiver
 */
export interface ILtiLaunchPresentation {
	/**
	 * The kind of browser window or frame from which the user launched inside the message sender's system.
	 * The value for this property MUST be one of: frame, iframe, or window.
	 */
	document_target?: 'frame' | 'iframe' | 'window';

	/**
	 * Fully-qualified HTTPS URL within the message sender's user experience to where the message receiver can redirect the user back.
	 * The message receiver can redirect to this URL after the user has finished activity, or if the receiver cannot start because of some technical difficulty.
	 */
	return_url?: string;

	/**
	 *  Language, country, and variant as represented using the IETF Best Practices for Tags for Identifying Languages
	 */
	locale?: string;

	/**
	 * Height and width of the window or frame where the content from the message receiver will be displayed to the user.
	 */
	height?: number;
	width?: number;
}

export interface ILtiLIS {
	/**
	 * The LIS course (offering and section) identifiers applicable to the context of this basic LTI launch request message.
	 */
	course_offering_sourcedid?: string;
	/**
	 * The LIS course (offering and section) identifiers applicable to the context of this basic LTI launch request message.
	 */
	course_section_sourcedid?: string;

	/**
	 * URL endpoint for the LTI Basic Outcomes Service [LTI-BO-11]. By best practice,
	 * this URL should not change from one resource link launch request message to the next;
	 * platforms should provide a single, unchanging endpoint URL for each registered tool.
	 * This URL endpoint may support various operations/actions; by best practice,
	 * the provider of an LTI Basic Outcome Service should respond with a response of unimplemented for actions it does not support.
	 *
	 * This field MUST appear if the platform supports the LTI Basic Outcomes Service for receiving outcomes
	 * from any resource link launch request messages sent to a particular tool.
	 *
	 * By best practice, an LTI Basic Outcome Service will only accept outcomes for launches from a user whose roles in the context contains
	 * the Learner context role (http://purl.imsglobal.org/vocab/lis/v2/membership#Learner),
	 * and thus will only provide a services.lis.result_sourcedid value in those resource link launch request messages.
	 * However, the platform should still send the services.lis.outcome_service_url for all launching users in that context,
	 * regardless of whether or not it provides a result_sourcedid value.
	 */
	outcome_service_url?: string;

	/**
	 * The LIS identifier for the user account that initiated the resource link launch request.
	 * The exact format of the sourced ID may vary with the LIS integration;
	 * it is simply a unique identifier for the launching user.
	 */
	person_sourcedid?: string;

	/**
   * An opaque identifier that indicates the LIS Result Identifier (if any) associated with the resource 
   * link launch request (identifying a unique row and column within the service provider's gradebook).

   * This field's value MUST be unique for every combination of <codecontext.id< code="">, resource_link.id, and user.id. 
   * The value may change for a particular resource_link.id + user.id from one resource link launch request to the next, 
   * so the tool should retain only the most recent value received for this field (for each context.id + resource_link.id + user.id).
   */
	result_sourcedid?: string;
}

export default interface ILtiResourceLinkRequest {
	iss: string;
	sub: string;
	aud: string[];
	exp: number;
	iat: number;
	azp: string;
	nonce: string;
	name?: string;
	given_name?: string;
	family_name?: string;
	middle_name?: string;
	picture?: string;
	email?: string;
	locale?: string;

	/**
	 * The required https://purl.imsglobal.org/spec/lti/claim/deployment_id claim's value contains
	 * a case sensitive string that identifies the platform-tool integration governing the message.
	 * It MUST NOT exceed 255 ASCII characters in length.
	 *
	 * For a given client_id, the deployment_id is a stable locally unique identifier within the iss (Issuer).
	 *
	 * The deployment_id is an essential attribute for tools to associate to an account.
	 */
	'https://purl.imsglobal.org/spec/lti/claim/deployment_id': string;
	'https://purl.imsglobal.org/spec/lti/claim/message_type': LtiMessageType;
	'https://purl.imsglobal.org/spec/lti/claim/version': LtiVersion;
	'https://purl.imsglobal.org/spec/lti/claim/roles': LtiRole[];

	/**
	 * The optional https://purlimsglobal.org/spec/lti/claim/role_scope_mentor claim's value contains an array of the user ID values which the current,
	 * launching user can access as a mentor (for example, the launching user may be a parent or auditor of a list of other users):
	 *
	 * The sender of the message MUST NOT include a list of user ID values in this property unless they
	 * also provide http://purl.imsglobal.orb/vocab/lis/v2/membership#Mentor as one of the values passed in the roles claim.
	 */
	'https://purl.imsglobal.org/spec/lti/claim/role_scope_mentor'?: string[];

	/**
	 * {@link ILtiContext}
	 */
	'https://purl.imsglobal.org/spec/lti/claim/context?': ILtiContext;

	/**
	 * {@link ILtiResourceLink}
	 */
	'https://purl.imsglobal.org/spec/lti/claim/resource_link': ILtiResourceLink;

	/**
	 * {@link ILtiToolPlatform}
	 */
	'https://purl.imsglobal.org/spec/lti/claim/tool_platform'?: ILtiToolPlatform;

	/**
	 * The required https://purl.imsglobal.org/spec/lti/claim/target_link_uri MUST be the same value as the
	 * target_link_uri passed by the platform in the OIDC third party initiated login request.
	 *
	 * The target link URI is the actual endpoint for the LTI resource to display; for example,
	 * the url in Deep Linking ltiResourceLink items, or the launch_url in IMS Common Cartridges,
	 * or any launch URL defined in the tool configuration.
	 *
	 * A Tool should rely on this claim rather than the initial target_link_uri to do the final redirection,
	 * since the login initiation request is unsigned.
	 */
	'https://purl.imsglobal.org/spec/lti/claim/target_link_uri': string;
	'https://purl.imsglobal.org/spec/lti/claim/launch_presentation'?: ILtiLaunchPresentation;
	'https://purl.imsglobal.org/spec/lti/claim/custom'?: { [key: string]: string };
	'https://purl.imsglobal.org/spec/lti/claim/lis'?: ILtiLIS;
}
