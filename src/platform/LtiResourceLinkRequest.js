"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var LtiRole;
(function (LtiRole) {
    LtiRole["System_Administrator"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator";
    LtiRole["System_None"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#None";
    LtiRole["System_AccountAdmin"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#AccountAdmin";
    LtiRole["System_Creator"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#Creator";
    LtiRole["System_SysAdmin"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#SysAdmin";
    LtiRole["System_SysSupport"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#SysSupport";
    LtiRole["System_User"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#User";
    LtiRole["Institution_Administrator"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator";
    LtiRole["Institution_Faculty"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Faculty";
    LtiRole["Institution_Guest"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Guest";
    LtiRole["Institution_None"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#None";
    LtiRole["Institution_Other"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Other";
    LtiRole["Institution_Staff"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff";
    LtiRole["Institution_Student"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student";
    LtiRole["Institution_Alumni"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Alumni";
    LtiRole["Institution_Instructor"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor";
    LtiRole["Institution_Learner"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Learner";
    LtiRole["Institution_Member"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Member";
    LtiRole["Institution_Mentor"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Mentor";
    LtiRole["Institution_Observer"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Observer";
    LtiRole["Institution_ProspectiveStudent"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#ProspectiveStudent";
    LtiRole["Membership_Administrator"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator";
    LtiRole["Membership_ContentDeveloper"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper";
    LtiRole["Membership_Instructor"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor";
    LtiRole["Membership_Learner"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner";
    LtiRole["Membership_Mentor"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor";
    LtiRole["Membership_Manager"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Manager";
    LtiRole["Membership_Member"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Member";
    LtiRole["Membership_Officer"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Officer";
})(LtiRole = exports.LtiRole || (exports.LtiRole = {}));
/**
 * An array of URI values for context types. If present, the array MUST include at least one context type from the context type vocabulary
 * described in Appendix A.1 Context type vocabularies. If the sender of the message wants to include a context type from another vocabulary
 * namespace, by best practice it should use a fully-qualified URI. By best practice, systems should not use context types
 * from another role vocabulary, as this may limit interoperability.
 */
var LtiContextType;
(function (LtiContextType) {
    LtiContextType["Course_Template"] = "http://purl.imsglobal.org/vocab/lis/v2/course#CourseTemplate";
    LtiContextType["Course_Offering"] = "http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering";
    LtiContextType["Course_Section"] = "http://purl.imsglobal.org/vocab/lis/v2/course#CourseSection";
    LtiContextType["Group"] = "http://purl.imsglobal.org/vocab/lis/v2/course#Group";
})(LtiContextType = exports.LtiContextType || (exports.LtiContextType = {}));
//# sourceMappingURL=LtiResourceLinkRequest.js.map